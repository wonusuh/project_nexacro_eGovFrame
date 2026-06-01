
var pForm = nexacro.Form.prototype;


// var pGrid = nexacro.Grid.prototype;
// pGrid.showselection = true;


/**
 * @class 해당 콤포넌트의 form으로 부터의 경로를 구하는 함수
 * @param {Object} obj - 콤포넌트
 * @return {String} 해당 콤포넌트의 form으로 부터의 경로
 * Linked Form에서는 Div00.form.Button00 가 아니라 Div00.formid.Button00 형태로 생성됨
 */
pForm.gfn_getCompId = function (obj)
{
	var sCompId = obj.name;
	var objParent = obj.parent;
	
	while (true)
	{
		//trace("" + objParent + " / " + objParent.name);
		if (objParent instanceof nexacro.ChildFrame )
		{
			break;
		}
		else {		
			sCompId = objParent.name + "." + sCompId;
		}
		objParent = objParent.parent;		
	}
	return sCompId;
}

/**
 * @class 월력용 Calendar에 월력 Popup Div을 자동생성하고 해당 Popup Div을 호출
 * @param {Object} obj - 월력용 Calendar
 * @return N/A
 */
pForm.gfn_openMonthCal = function (obj)
{
    var sFullPath = this.gfn_getCompId(obj)     //FormID.Calendar00 or FormID.Div00.form.Calendar00
	var sFormId   = this.name;
    var compPath  = sFullPath.substr(sFormId.length+1);    //Calendar00 or Div00.form.Calendar00
    var compid    = this.gfn_getCompId(obj); //FormID.Calendar00 or FormID.Div00.form.Calendar00

    // Creating pdv
	if (this.gfn_isNull(this.components[compid])) {		
		var objCalPopupDiv = new PopupDiv();
		objCalPopupDiv.init(compid, obj.getOffsetLeft(), obj.getOffsetBottom(), 174, 215, null, null);		
		this.addChild(compid, objCalPopupDiv);
		objCalPopupDiv.show();
		objCalPopupDiv.set_url("Comm::Comm_CalendarMonthSub.xfdl");
		objCalPopupDiv.set_cssclass("");
		objCalPopupDiv.calObj = obj;
		objCalPopupDiv.calId = compPath;
        objCalPopupDiv.callbackfunc = obj.uCallbackfunc;
        objCalPopupDiv.addEventHandler("oncloseup", this.gfn_monthCalClose, this);
	}
	else {
		var objCalPopupDiv = this.components[compid];
		
		// Calendar에서 수정한 년도를 Popup Div에 반영
		var sDate = obj.value;
        if(this.gfn_isNull(sDate)) sDate = this.gfn_getDate();;
		objCalPopupDiv.form.sta_year.set_text(sDate.substr(0,4));
  	}

	objCalPopupDiv.trackPopupByComponent(obj, 0, obj.height);
	
	return false;
};

pForm.gfn_monthCalClose = function(obj)
{
	if (!this.gfn_isNull(obj.callbackfunc)){	
		this.lookupFunc(obj.callbackfunc).call(obj.calId, obj.calObj.value.substr(0,6)); 
	}
}



/**
 * @class 공통코드 설정
 * @param 컴퍼넌트 id  구분자는 space
 * @return N/A
 */
pForm.gfn_getCommCode = function()
{
	var arg = this.gfn_getCommCode.arguments;
	var arrComm = arg[0].split(" ");
	if (arrComm.length == 0) {
		return;
	}

	var sCompId = "";
	var objDs = "";
    var strDs = "";
    var objApp = this.gfn_getApplication();
    //"cbo_List cbo_List2:0"
	for(var i=0; i<arrComm.length; i++) 
	{
		var sCompId = arrComm[i].split(":")[0]; 
		var sType   = arrComm[i].split(":")[1];
        
//       sCompId = this.all[sCompId];
        sCompId = eval("this."+sCompId);
        
		if(sCompId instanceof nexacro.Dataset){
            strDs = sCompId.id;
            objDs = sCompId;
        }
        else{
            objDs = sCompId.getInnerDataset();            
            strDs = objDs.id;
        }

        sCodeType = strDs.substr(strDs.length-4, 4);   //ds_C003...
        objApp.gds_comCode.filter("GROUP =='" + sCodeType + "'");
        objDs.copyData(objApp.gds_comCode, true);
        objApp.gds_comCode.filter("");
        if (!this.gfn_isNull(sType)){
            if (sType != 2)	{
                objDs.insertRow(0);
                objDs.setColumn(0, "CODE", (sType == 0 ? "ALL" : ""));
                objDs.setColumn(0, "CODE_NAME", (sType == 0 ? "ALL" : "Selected..."));
            }
        }
        
        if(sCompId instanceof nexacro.Combo || sCompId instanceof nexacro.ListBox || sCompId instanceof nexacro.Radio){
            sCompId.set_index(0);
        }
	}
}




pForm.gfn_setMultiCombo = function(obj)
{
	var sInnerDataset = obj.innerdataset;
	var sCodeColumn   = obj.codecolumn;
	var sDataColumn   = obj.datacolumn;	
	var nDisplayCnt   = obj.displayrowcount;
	if(this.gfn_isNull(nDisplayCnt)) nDisplayCnt = 10; //최대 10개로 지정

    if(this.gfn_isNull(sInnerDataset) || this.gfn_isNull(sCodeColumn) || this.gfn_isNull(sDataColumn)){
        this.alert("innerdataset error");
        return;
    }

	var objInnerDataset = this.all[sInnerDataset];	
	if(this.gfn_isNull(objInnerDataset)){
		this.alert("innerdataset error");
		return;
	}

	var sCompFull = this.gfn_getCompId(obj);   					//formid.Div00.form.Combo00
	var sCompPath = sCompFull.substr(this.name.length+1);  		//Div00.form.Combo00
	var sUniqueID = nexacro.replaceAll(sCompPath, ".", "_");	//fDiv00_form_Combo00

   //1. 멀티콤보 Dataset 생성 - 그리드 바인딩 용 ("_ds_"+innerds+sUniqueID 지정)  
   //Inner ds 변경 가능성이...? 
    var strComboDs = "_ds_" + sInnerDataset + "_" + sUniqueID;
	var objComboDs = this.all[strComboDs];
	
	if(this.gfn_isNull(objComboDs)) {		
		objComboDs = new Dataset();
		this.addChild(strComboDs, objComboDs);

        //멀티콤보 Dataset 컬럼 생성
        objComboDs.clear();
        objComboDs.addColumn("_CHK"       , "STRING");
        objComboDs.addColumn(sCodeColumn, "STRING");
        objComboDs.addColumn(sDataColumn, "STRING");

        //멀티콤보 Dataset 데이터 추가
        objComboDs.set_enableevent(false);
        for(var j=0; j<objInnerDataset.getRowCount(); j++)
        {
            objComboDs.addRow();
            objComboDs.setColumn(j, "_CHK", "0");
            objComboDs.setColumn(j, sCodeColumn, objInnerDataset.getColumn(j, sCodeColumn));
            objComboDs.setColumn(j, sDataColumn, objInnerDataset.getColumn(j, sDataColumn));
        }
		objComboDs.applyChange();
        if(objInnerDataset.getRowCount() < nDisplayCnt)    nDisplayCnt = objInnerDataset.getRowCount();        
        objComboDs.set_enableevent(true);        
	}
    
    //2. PopupDiv 생성
    var sPdvId = "_pdv_" + sUniqueID;    
    var objPdv = this.components[sPdvId];		
	if(this.gfn_isNull(objPdv)) {		
		var objPdv = new PopupDiv();        
		objPdv.init(sPdvId, obj.getOffsetLeft(), obj.getOffsetBottom(), 100, 100, null, null);		
		this.addChild(sPdvId, objPdv);
		objPdv.show();
		objPdv.set_cssclass("pdiv_WF_Area");

		var objParam = { combo : obj,
		                 comboname : sCompPath,
		                 dataset : objComboDs,
						 innerds : sInnerDataset,
						 codecolumn : sCodeColumn,
						 datacolumn : sDataColumn,
						};

		objPdv.uParam = objParam;		        
        objPdv.addEventHandler("oncloseup", this._pdvMultiComboClose, this);		
	}
	    //3. Grid 생성    
    var objGrid = objPdv.form.components["_grd_combo"];		
	if(this.gfn_isNull(objGrid)){		
        var objGrd = new Grid("_grd_combo", 0, 0, null, null, 0, 0);
        objGrd.set_cssclass("grd_mCombo");
        objPdv.addChild("_grd_combo", objGrd); 
        
        objGrd.set_enableevent(false);
        objGrd.set_enableredraw(false);
        
        objGrd.set_binddataset(objComboDs.name);
        objGrd.set_wheelscrollrow(1);
        objGrd.createFormat();	
		objGrd.setFormatRowProperty(0, "size", 30 );
		objGrd.setFormatRowProperty(1, "size", 30 );

        objGrd.mergeCell(1, 2, -1, -1);   //헤더 체크박스 제외 머지
        objGrd.setCellProperty("head", 0, "displaytype", "checkboxcontrol");
        objGrd.setCellProperty("head", 0, "text", "0");
        objGrd.setCellProperty("head", 1, "text", "Select all");
        
        objGrd.setCellProperty("Body", 0, "displaytype", "checkboxcontrol");
        objGrd.setCellProperty("Body", 0, "edittype", "checkbox");
        objGrd.set_autosizingtype("col");
        objGrd.set_scrollbarsize(10);
        objGrd.show();

        objGrd.addEventHandler("onheadclick", this.gfn_grid_onheadclick, this);
        objGrd.set_enableevent(true);
        objGrd.set_enableredraw(true);    
        
        var nScrollSize = objGrd.scrollbarsize;
        var nGridSize = objGrd.getRealColFullSize();  //그리드 전체 컬럼 사이즈
        var nGridCol0 = objGrd.getRealColSize(0);     //첫번째 컬럼 사이즈: checkbox
        var nGridCol1 = objGrd.getRealColSize(1);     //두번째 컬럼 사이즈: code
        var nGridCol2 = objGrd.getRealColSize(2);     //세번째 컬럼 사이즈: value
        var nGridRow0 = objGrd.getRealRowSize(-1);
        var nGridRow1 = objGrd.getRealRowSize(0);
                
        //콤보 사이즈를 기준
        var nComboSize = obj.getOffsetWidth()-2; //보더제외

        // 데이터 길이가 짧아 그리드에 빈영역이 생길경우 컬럼사이즈 조정
        if(nComboSize > nGridSize){
			objGrd.set_autosizingtype("none");
			objGrd.setRealColSize("body", 0, nGridCol0);
			objGrd.setRealColSize("body", 1, nGridCol1);
			
			// 그리드 스크롤 있을때
			if(objComboDs.rowcount > nDisplayCnt){
				objGrd.setRealColSize("body", 2, nComboSize-nGridCol0-nGridCol1-nScrollSize);
			}
			else{
				objGrd.setRealColSize("body", 2, nComboSize-nGridCol0-nGridCol1);
			}
            objPdv.set_width(nComboSize+2);
			
        }
        // 데이터 길이가 길어서 콤보영역에 다 안보일 경우 사이즈 키움
        else{
            objPdv.set_width(nGridSize + nScrollSize + 2);
        }        
        objPdv.set_height(nGridRow0 + (nGridRow1 * nDisplayCnt) + 2);
    }
    obj.set_text("선택");    
	objPdv.trackPopupByComponent(obj, 0, obj.height);
}

pForm._pdvMultiComboClose = function(obj, e)
{
//    trace(obj.uParam.innerds);   //object dataset
//    trace(obj.uParam.combo); 	 //object combo

	var objDs    = obj.uParam.dataset;
	var objCombo = obj.uParam.combo;

	var arrTextList  = [];
	var arrValueList = [];
			
	for(var i=0; i<objDs.getRowCount(); i++)
	{
		if(objDs.getColumn(i, "_CHK") == "1"){
			arrTextList.push(objDs.getColumn(i, obj.uParam.datacolumn));
			arrValueList.push(objDs.getColumn(i, obj.uParam.codecolumn));
		}
	}

	var sComboText  = arrTextList.toString();
	var sComboValue = arrValueList.toString();
	this.gfn_setComboText(obj.uParam, arrTextList, arrValueList);
	
	var objFn = objCombo.getEventHandler("oncloseup", 0);
	if(!this.gfn_isNull(objFn)){
		var objEvent = new nexacro.ComboCloseUpEventInfo(); // 이벤트객체 생성
		objEvent.posttext = sComboText
		objEvent.postvalue = sComboValue

		//call 호출시 this 전달 필요
		objFn.call(this, objCombo, objEvent); 
	}
};

pForm.gfn_setComboText = function(uParam, arrTextList, arrValueList)
{
	var sComboText = arrTextList.toString();
	uParam.combo.returntext = sComboText;
	uParam.combo.retrunvalue = arrValueList.toString();	
	var objTextSize = nexacro.getTextSize(sComboText, "normal 14px/normal 'Verdana,Malgun Gothic'");

	//콤보에 속성값 지정되어 있을 시 Text 표현 안됨. 속성해제
	uParam.combo.set_innerdataset("");
	uParam.combo.set_codecolumn("");
	uParam.combo.set_datacolumn("");	
	
	// Text가 표현되는 combo edit 크기
	// combo width - combo drop button size - padding
	var nComboTextWidth = uParam.combo.getOffsetWidth() - uParam.combo.getOffsetHeight() - 10;

	if (nComboTextWidth < objTextSize.nx){
		uParam.combo.set_text(arrTextList.length+"개 선택");
		uParam.combo.set_tooltiptext(sComboText);
		uParam.combo.set_tooltiptype("hover");
	}
	else{
		uParam.combo.set_text(sComboText);
	}
		
	if (this.gfn_isNull(arrTextList)) uParam.combo.set_text("선택");
	
	//속성지정
	uParam.combo.set_innerdataset(uParam.innerds);
	uParam.combo.set_codecolumn(uParam.codecolumn);
	uParam.combo.set_datacolumn(uParam.datacolumn);	
	
};

var pCombo = nexacro.Combo.prototype;
pCombo.get_value = function()
{
    return this.retrunvalue;
}

pCombo.get_text = function()
{
    return this.returntext;
}

//멀티 콤보값 설정하기
// this.Combo00.set_multiValue(this, "01,03,04");
pCombo.set_multiValue = function(oForm, sValue)
{
	//this: Combo
	var sCompFull = oForm.gfn_getCompId(this);   					//formid.Div00.form.Combo00
	var sCompPath = sCompFull.substr(oForm.name.length+1);  		//Div00.form.Combo00
	var sUniqueID = nexacro.replaceAll(sCompPath, ".", "_");	//Div00_form_Combo00

	var arrValueList = sValue.split(",");
	var arrTextList = [];

	var sInnerDS = this.innerdataset;
	var sCodeCol = this.codecolumn;
	var sDataCol = this.datacolumn;
	var nFindRow;	

	var objDs = oForm.all["_ds_"+sInnerDS+"_"+sUniqueID];	
	if(oForm.gfn_isNull(objDs)){
		return;
	}

	//기존 체크된 내역 초기화
	objDs.reset();
	this.set_text("");
	for (var i=0; i<arrValueList.length; i++)
	{
		nFindRow = objDs.findRow(sCodeCol, arrValueList[i]);
		if (nFindRow != -1){
			arrTextList.push(objDs.getColumn(nFindRow, sDataCol));
			objDs.setColumn(nFindRow, "_CHK", "1");
		}
	}

	var objParam = { combo : this,
					 dataset : objDs,
					 innerds : sInnerDS,
					 codecolumn : sCodeCol,
					 datacolumn : sDataCol };
	oForm.gfn_setComboText(objParam, arrTextList, arrValueList);
}




/**
 * @class  DLL의 full 경로를 리턴
 * @param  {String} 컴포넌트 DLL 파일명
 * @return {String} 해당 DLL의 실제 경로
 */
pForm.gfn_getDLLPath = function(sFileName)
{
	var strpath = "";
	var xadl = nexacro.getProjectPath();
	
	// studio로 실행
    if (xadl.indexOf("file://") != -1) {        
		xadl = xadl.replace("file://", "");
        strpath  = nexacro.replaceAll(xadl.substring(0, xadl.lastIndexOf("/")), "/", "\\")+"\\dll\\"+sFileName;
    }
	// 웹 접속
    else {
		strpath = system.convertRealPath("%USERAPP%\\Component\\" + sFileName);
	}
	
	//trace("==================== gfnGetDLLPath strpath : " + strpath);
    return strpath;
};

/**
 * @class 컴포넌트 DLL 을 로딩하고 그 결과 Object를 리턴
 * @param {String}  컴포넌트 DLL 파일명
 * @return {Object} DLL 컴포넌트 Object
 */ 
pForm.gfn_openDLL = function(sFileName)
{
	var objApp = this.gfn_getApplication();
	
	if (this.gfn_isNull(objApp[sFileName])) {
		objApp[sFileName] = {};
	}
	else {
		return objApp[sFileName];
	}

	// 로컬/웹 접근에 따른 파일 full 경로 가져오기
	var strpath = this.gfn_getDLLPath(sFileName);

	// dll load
	objApp[sFileName] = nexacro._addExtensionModule(strpath);

	return objApp[sFileName];
};

/**
 * @class 컴포넌트 DLL 을 로딩하고 그 결과 Object를 리턴
 * @return N/A
 */  
pForm.gfn_closeDLL = function(sFileName)
{
	// 로컬/웹 접근에 따른 파일 full 경로 가져오기
	var strpath = this.gfn_getDLLPath(sFileName);
	
	// dll 등록 해제
	nexacro._clearExtensionModule(strpath);
	
	// 객체 null 처리
	var objApp = this.gfn_getApplication();
	objApp[sFileName] = null;
};

/**
 * @class 확장 컴포넌트 DLL를 로딩하고 그 결과 Object를 리턴
 * @return {Object} 확장 컴포넌트 Object
 */ 
pForm.gfn_getExtCommon = function()
{
	var strFile = "";
	
	// nexacro 엔진 버전 체크
	var navigatorFullName = system.navigatorfullname;
	trace("navigatorFullName : " + navigatorFullName);
	
	if (navigatorFullName == "nexacro platform 17 Engine (Windows XP)" ) {
		strFile = "ExtCommonV17_XP.dll";
	}
	else if (navigatorFullName == "nexacro platform 17 Engine (x86)") {
		strFile = "ExtCommonV17_32.dll";
	}
	else {
		strFile = "ExtCommonV17_64.dll";
	}	
	
	trace("==================== gfn_getExtCommon strFile : " + strFile);
	return this.gfn_openDLL(strFile);
};

/**
 * @class확장 컴포넌트 DLL를 해제한다.
 * @return N/A
 */  
pForm.gfn_closeExtCommon = function()
{
	var strFile = "";

	// nexacro 엔진 버전 체크
	var navigatorFullName = system.navigatorfullname;
	//trace("navigatorFullName : " + navigatorFullName);
	
	if (navigatorFullName == "nexacro platform 17 Engine (Windows XP)" ) {
		strFile = "ExtCommonV17_XP.dll";
	}
	else if (navigatorFullName == "nexacro platform 17 Engine (x86)") {
		strFile = "ExtCommonV17_32.dll";
	}
	else {
		strFile = "ExtCommonV17_64.dll";
	}	
	this.gfn_closeDLL(strFile);
};
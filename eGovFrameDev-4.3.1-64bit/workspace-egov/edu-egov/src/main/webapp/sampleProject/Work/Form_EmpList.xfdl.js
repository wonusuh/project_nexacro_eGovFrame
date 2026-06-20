(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Emp");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_emp", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMP_NAME","type" : "STRING","size" : "50"},{"id" : "EMP_ID","type" : "STRING","size" : "10"},{"id" : "DEPT_CODE","type" : "STRING","size" : "256"},{"id" : "POSITION","type" : "STRING","size" : "10"},{"id" : "HIRE_DATE","type" : "DATE","size" : "10"},{"id" : "SALARY","type" : "INT","size" : "10"},{"id" : "GENDER","type" : "STRING","size" : "256"},{"id" : "MARRIED","type" : "STRING","size" : "256"},{"id" : "SKILL","type" : "STRING","size" : "256"},{"id" : "HOBBY","type" : "STRING","size" : "256"},{"id" : "MEMO","type" : "STRING","size" : "256"}]},"Rows" : [{"EMP_ID" : "AA001","EMP_NAME" : "Olivia","DEPT_CODE" : "10","POSITION" : "30","HIRE_DATE" : "20101003","SALARY" : "83000","GENDER" : "W","MARRIED" : "true","MEMO" : "ivory"},{"EMP_ID" : "AA002","EMP_NAME" : "John","DEPT_CODE" : "20","POSITION" : "40","HIRE_DATE" : "20051011","SALARY" : "76000","GENDER" : "M","MARRIED" : "false","MEMO" : "greenyellow"},{"EMP_ID" : "BB001","EMP_NAME" : "Jackson","DEPT_CODE" : "30","POSITION" : "30","HIRE_DATE" : "20070206","SALARY" : "95000","GENDER" : "M","MARRIED" : "true","MEMO" : "aliceblue"},{"EMP_ID" : "BB002","EMP_NAME" : "Maia","DEPT_CODE" : "40","POSITION" : "20","HIRE_DATE" : "20090512","SALARY" : "60000","GENDER" : "W","MARRIED" : "false","MEMO" : "ivory"},{"EMP_ID" : "CC001","EMP_NAME" : "Adam","DEPT_CODE" : "50","POSITION" : "40","HIRE_DATE" : "20010109","SALARY" : "88000","GENDER" : "M","MARRIED" : "true","MEMO" : "greenyellow"},{"EMP_ID" : "DD001","EMP_NAME" : "Ray","DEPT_CODE" : "60","POSITION" : "30","HIRE_DATE" : "20160202","SALARY" : "60000","GENDER" : "M","MARRIED" : "true","MEMO" : "lightpink"},{"EMP_NAME" : "JiYoung","EMP_ID" : "KR080","EMP_NAME" : "Ray","DEPT_CODE" : "60","POSITION" : "50","HIRE_DATE" : "20131120","SALARY" : "8500","GENDER" : "F","MARRIED" : "false","MEMO" : "lightpink","SKILL" : "01,07","HOBBY" : "05"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "DEPT_CODE","type" : "STRING","size" : "256"},{"id" : "DEPT_NAME","type" : "STRING","size" : "256"},{"id" : "DEPT_EMP","type" : "STRING","size" : "256"}]},"Rows" : [{"DEPT_CODE" : "10","DEPT_NAME" : "회계","DEPT_EMP" : "Kate"},{"DEPT_CODE" : "20","DEPT_NAME" : "재무","DEPT_EMP" : "Dennis"},{"DEPT_CODE" : "30","DEPT_NAME" : "인사","DEPT_EMP" : "Adam"},{"DEPT_CODE" : "40","DEPT_NAME" : "지원","DEPT_EMP" : "Jackson"},{"DEPT_CODE" : "50","DEPT_NAME" : "영업","DEPT_EMP" : "Belle"},{"DEPT_CODE" : "60","DEPT_NAME" : "IT","DEPT_EMP" : "Wonu"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pos", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "CODE","type" : "STRING","size" : "256"},{"id" : "NAME","type" : "STRING","size" : "256"}]},"Rows" : [{"CODE" : "10","NAME" : "CEO"},{"CODE" : "20","NAME" : "Director"},{"CODE" : "30","NAME" : "General Manager"},{"CODE" : "40","NAME" : "Manager"},{"CODE" : "50","NAME" : "Assistant Manager"},{"CODE" : "60","NAME" : "Staff"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_skill", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "CODE","type" : "STRING","size" : "256"},{"id" : "NAME","type" : "STRING","size" : "256"}]},"Rows" : [{"CODE" : "01","NAME" : "HTML"},{"CODE" : "02","NAME" : "CSS"},{"CODE" : "03","NAME" : "JavaScript"},{"CODE" : "04","NAME" : "JAVA"},{"CODE" : "05","NAME" : "C/C++"},{"CODE" : "06","NAME" : "Python"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_hobby", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "CODE","type" : "STRING","size" : "256"},{"id" : "NAME","type" : "STRING","size" : "256"}]},"Rows" : [{"CODE" : "01","NAME" : "Climbing"},{"CODE" : "02","NAME" : "Running"},{"CODE" : "03","NAME" : "Cycling"},{"CODE" : "04","NAME" : "Swimming"},{"CODE" : "05","NAME" : "Yoga"},{"CODE" : "06","NAME" : "Golf"},{"CODE" : "07","NAME" : "Tennis"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("st_title","10","10","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Employees List");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Button("btn_retrieve","300","10","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Retrieve");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add","410","10","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Add");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete","520","10","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Delete");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","630","10","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Save");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","10","40","850","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_border("1px solid #9c9c9c");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","11","6","106","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("Department");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_deptCode","87","6","62","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_findDept","159","6","40","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("Find");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_deptName","208","6","107","33",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static01","365","6","55","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("Name");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_empName","419","6","90","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","569","6","60","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("Gender");
            this.div_search.addChild(obj.name, obj);

            obj = new Radio("rdo_gender","619","6","190","30",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_rowcount("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_search_form_rdo_gender_innerdataset = new nexacro.NormalDataset("div_search_form_rdo_gender_innerdataset", obj);
            div_search_form_rdo_gender_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "A","datacolumn" : "All"},{"codecolumn" : "F","datacolumn" : "Female"},{"codecolumn" : "M","datacolumn" : "Male"}]});
            obj.set_innerdataset(div_search_form_rdo_gender_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Grid("grd_emp","10","100","850","200",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_emp");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"25\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"ID\"/><Cell col=\"2\" text=\"Name\"/><Cell col=\"3\" text=\"Department\"/><Cell col=\"4\" text=\"Position\"/><Cell col=\"5\" text=\"Hired Date\"/><Cell col=\"6\" text=\"Salary\"/><Cell col=\"7\" text=\"Gender\"/><Cell col=\"8\" text=\"Marital&#13;&#10;Status\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:EMP_ID\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"AA-###\" maskedittype=\"string\"/><Cell col=\"2\" text=\"bind:EMP_NAME\" displaytype=\"normal\" edittype=\"text\" expandshow=\"show\"/><Cell col=\"3\" text=\"bind:DEPT_CODE\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_dept\" combocodecol=\"DEPT_CODE\" combodatacol=\"DEPT_NAME\"/><Cell col=\"4\" text=\"bind:POSITION\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_pos\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"5\" text=\"bind:HIRE_DATE\" displaytype=\"date\" edittype=\"date\"/><Cell col=\"6\" text=\"bind:SALARY\" displaytype=\"number\" edittype=\"mask\" maskeditformat=\"#,###\"/><Cell col=\"7\" text=\"expr:GENDER === &quot;M&quot; ? &quot;Male&quot; : &quot;Female&quot;\"/><Cell col=\"8\" text=\"bind:MARRIED\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" text=\"expr:comp.parent.ds_emp.rowcount\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\" text=\"expr:dataset.getSum(&apos;SALARY&apos;)\" displaytype=\"number\"/><Cell col=\"7\"/><Cell col=\"8\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv00","20","310","597","390",null,null,null,null,null,null,this);
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            obj.set_background("aquamarine");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_05","10","132","100","30",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("0");
            obj.set_text("Memo");
            obj.getSetter("onchanged").set("Common_onchanged");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new TextArea("txt_memo","101","110","142","75",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("1");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Static("Static00_03","13","225","100","30",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("2");
            obj.set_text("Hobby");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new MultiCombo("mcbo_hobby","143","203","200","75",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_hobby");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_edittype("multitag");
            obj.set_text("MultiCombo00");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Static("Static00_04","24","40","100","30",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("4");
            obj.set_text("Skill");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new CheckBoxSet("chsk_skill","115","18","151","75",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_skill");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_rowcount("3");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Button("Button00","chsk_skill:141","64","112","46",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("6");
            obj.set_text("close");
            this.PopupDiv00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_search.form
            obj = new Layout("default","",0,0,this.div_search.form,function(p){});
            this.div_search.form.addLayout(obj.name, obj);

            //-- Default Layout : this.PopupDiv00.form
            obj = new Layout("default","",0,0,this.PopupDiv00.form,function(p){});
            this.PopupDiv00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1000,670,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item12","PopupDiv00.form.txt_memo","value","ds_emp","MEMO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","PopupDiv00.form.txt_memo","background","ds_emp","MEMO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","PopupDiv00.form.mcbo_hobby","value","ds_emp","HOBBY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","PopupDiv00.form.chsk_skill","value","ds_emp","SKILL");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_EmpList.xfdl", function() {
        // 부서찾기 팝업
        this.fn_openPopupDept = function(obj,e)
        {
        	const objChild = new ChildFrame('popupDept', 0, 0, 300, 400);
        	objChild.formurl = 'Work::Popup_Dept.xfdl';
        	objChild.openalign = 'center middle';
        	objChild.dragmovetype = 'all';

        	objChild.showModal(
        		this.getOwnerFrame(),
        		{},
        		this,
        		'fn_callback_popup'
        	);
        };


        // 부서검색 팝업의 콜백함수
        this.fn_callback_popup = async (sPopupId, sReturn) => {
        	if(!sReturn){
        		sReturn = '';
        	}

        	// 부서검색 팝업의 로직만 처리
        	if(sPopupId === 'popupDept'){
        		if(sReturn.length === 0){
        			return;
        		}

        		const arrRtn = sReturn.split(':');
        		this.div_search.form.edt_deptCode.value = arrRtn[0]; // 부서코드
        		this.div_search.form.edt_deptName.value = arrRtn[1]; // 부서명
        	}
        };

        // 성별 라디오 변경이벤트
        this.onGenderChanged = function(obj,e) {
        	if(e.postvalue === 'A'){
        		this.ds_emp.filter('');
        	} else {
        		this.ds_emp.filter("GENDER === '" + e.postvalue + "'");
        	}
        };

        // 조회 트랜 호출
        this.fn_retrieve = function(obj,e)
        {
        	let sDeptCode = this.div_search.form.edt_deptCode.value;
        	let sEmpName = this.div_search.form.edt_empName.value;
        	if(!sDeptCode) sDeptCode = '';
        	if(!sEmpName) sEmpName = '';

        	this.transaction(
        		'svcSelectEmp',
        		'http://localhost:8080/edu-egov/edu/getEmp.do',
        		'',
        		'ds_emp=out_emp',
        		"deptCode=" + sDeptCode + " empName=" + nexacro.wrapQuote(sEmpName),
        		'fn_callback'
        	);
        	trace('fn_retrieve');
        };

        // 트랜의 콜백함수
        this.fn_callback = (svcId, errCd, errMsg) => {
        	// 서버에러 발생 시 여기서 함수종료
        	if(errCd < 0){
        		this.alert('Error : ' + errMsg);
        		return;
        	}

        	if (svcId === 'svcSelectEmp'){
        		trace('Success : Select Employees');
        	} else if (svcId === 'svcSaveEmp') {
        		trace('Success : Save Employees');
        	}
        };

        // row 추가
        this.fn_add = function(obj,e)
        {
        	const rowIdx = this.ds_emp.addRow();
        	this.ds_emp.setColumn(rowIdx, "HIRE_DATE", this.fn_today());
        };

        // 오늘 날짜를 반환
        this.fn_today = () => {
        	const objDate = new Date();
        	let sToday = objDate.getFullYear().toString();
        	sToday += (objDate.getMonth() + 1).toString().padLeft(2, '0')
        	sToday += objDate.getDate().toString().padLeft(2, '0');
        	return sToday;
        };

        // row 삭제
        this.fn_delete = function(obj,e)
        {
        	this.ds_emp.deleteRow(this.ds_emp.rowposition);
        };

        // 저장 트랜 호출
        this.fn_save = function(obj,e)
        {
        	this.transaction(
        		'svcSaveEmp',
        		'http://localhost:8080/edu-egov/edu/saveEmp.do',
        		'in_emp=ds_emp:u',
        		'',
        		'',
        		'fn_callback'
        	);
        };

        // 화면이 모두 로딩된 후 발생하는 이벤트
        this.form_onload = function(obj,e)
        {
        	this.transaction(
        		'svcSelectCode',
        		'http://localhost:8080/edu-egov/edu/getCode.do',
        		'',
        		'ds_dept=out_dept ds_pos=out_pos ds_skill=out_skill ds_hobby=out_hobby',
        		'fn_callback'
        	);
        };

        // 그리드 돋보기 클릭이벤트
        this.grd_emp_onExpandUp = function(obj,e)
        {
        	const objRect = obj.getCellRect(e.row, e.cell);
        	const nX = objRect.left;
        	const nY = objRect.bottom;
        	this.PopupDiv00.trackPopupByComponent(obj, nX, nY);
        };

        this.PopupDiv00_Button00_onclick = function(obj,e)
        {
        	this.PopupDiv00.closePopup();
        };

        // 그리드의 셀 더블클릭 이벤트
        this.grd_emp_onCellDblClicked = function(obj,e)
        {
        	const objChildFrame = new ChildFrame('popupDetail', 0, 0, 750, 320);
        	objChildFrame.formurl = "Work::Form_EmpDetail.xfdl";
        	objChildFrame.dragmovetype = "all";
        	objChildFrame.showtitlebar = true;
        	objChildFrame.titletext = "Employee Detail Information";
        	objChildFrame.openalign = "center middle";
        	objChildFrame.overlaycolor = "RGBA(196,196,196,0.5)";

        	// 사원번호를 파라미터로 전달
        	const objParam = { sEmpId : this.ds_emp.getColumn(e.row, "EMP_ID") };

        	// 오픈
        	objChildFrame.showModal(
        		this.getOwnerFrame(),
        		objParam,
        		this,
        		"fn_popupCallback"
        	);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_retrieve.addEventHandler("onclick",this.fn_retrieve,this);
            this.btn_add.addEventHandler("onclick",this.fn_add,this);
            this.btn_delete.addEventHandler("onclick",this.fn_delete,this);
            this.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.div_search.form.edt_deptCode.addEventHandler("onchanged",this.div_search_edt_deptCode_onchanged,this);
            this.div_search.form.btn_findDept.addEventHandler("onclick",this.fn_openPopupDept,this);
            this.div_search.form.rdo_gender.addEventHandler("onitemchanged",this.onGenderChanged,this);
            this.grd_emp.addEventHandler("onexpandup",this.grd_emp_onExpandUp,this);
            this.grd_emp.addEventHandler("oncelldblclick",this.grd_emp_onCellDblClicked,this);
            this.PopupDiv00.form.Static00_05.addEventHandler("onclick",this.div_detail_Static00_05_onclick,this);
            this.PopupDiv00.form.txt_memo.addEventHandler("onchanged",this.Common_onchanged,this);
            this.PopupDiv00.form.Static00_03.addEventHandler("onclick",this.div_detail_Static00_03_onclick,this);
            this.PopupDiv00.form.Button00.addEventHandler("onclick",this.PopupDiv00_Button00_onclick,this);
        };
        this.loadIncludeScript("Form_EmpList.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();

(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("Form_Work");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsData", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "ID","type" : "STRING","size" : "256"},{"id" : "NAME","type" : "STRING","size" : "256"},{"id" : "DESCRIPTION","type" : "STRING","size" : "256"},{"id" : "USE_YN","type" : "STRING","size" : "256"},{"id" : "REG_USER","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "COL1","type" : "STRING","size" : "256"},{"id" : "COL2","type" : "STRING","size" : "256"}]},"Rows" : [{"COL1" : "NEXACRO","COL2" : "TOBESOFT"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnSearch","25","25","75","25",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","25","75","500","200",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsData");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" text=\"NAME\"/><Cell col=\"2\" text=\"DESCRIPTION\"/><Cell col=\"3\" text=\"USE_YN\"/><Cell col=\"4\" text=\"REG_USER\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\" edittype=\"normal\"/><Cell col=\"1\" text=\"bind:NAME\" edittype=\"normal\"/><Cell col=\"2\" text=\"bind:DESCRIPTION\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:USE_YN\" edittype=\"normal\"/><Cell col=\"4\" text=\"bind:REG_USER\" edittype=\"normal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd","121","17","101","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("입력");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete","239","17","101","34",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","349","17","101","34",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("저장");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Work.xfdl", function() {
        this.btnSearch_onclick = function(obj,e)
        {
        	this.transaction(
        		// 트랜 아이디
        		'svcGetData',
        		// url
        		'http://localhost:8080/edu-egov/edu/getData.do',
        		// 서버로 전달할 dataset
        		'dsSearch=dsSearch',
        		// result.addDataSet("dsData", resultData); // Java -> 넥사크로 데이터셋
        		'dsData=dsData',
        		// 서버로 전달할 파라미터
        		"userId='admin'",
        		//
        		''
        	);
        };


        // "입력" 버튼 클릭이벤트
        this.btnAdd_onclick = function(obj,e)
        {
        	this.dsData.insertRow(0);
        };


        // "삭제" 버튼 클릭이벤트
        this.btnDelete_onclick = function(obj,e)
        {
        	// 현재 선택되어져있는 row 를 삭제
        	this.dsData.deleteRow(this.dsData.rowposition);
        };

        // "저장" 버튼 클릭이벤트
        this.btnSave_onclick = function(obj,e)
        {
        	this.transaction(
        		// 트랜 아이디
        		'svcSaveData',
        		// url
        		'http://localhost:8080/edu-egov/edu/saveData.do',
        		// 서버로 전달할 dataset
        		'dsSearch=dsSearch:u', // ":u" -> 수정된 데이터만 전달
        		// result.addDataSet("dsData", resultData); // Java -> 넥사크로 데이터셋
        		'',
        		// 서버로 전달할 파라미터
        		"",
        		// 콜백 함수
        		'fnCallback'
        	);
        };

        // 저장 트랜의 콜백함수
        this.fnCallback = (svcId, errCd, errMsg) => {
        	if (errCd < 0) {
        		alert("에러 : ", errMsg);
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
            this.btnDelete.addEventHandler("onclick",this.btnDelete_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
        };
        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();

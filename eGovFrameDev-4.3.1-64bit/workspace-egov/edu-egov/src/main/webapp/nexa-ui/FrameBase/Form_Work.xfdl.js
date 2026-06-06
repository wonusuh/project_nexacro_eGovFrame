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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" text=\"NAME\"/><Cell col=\"2\" text=\"DESCRIPTION\"/><Cell col=\"3\" text=\"USE_YN\"/><Cell col=\"4\" text=\"REG_USER\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\"/><Cell col=\"1\" text=\"bind:NAME\"/><Cell col=\"2\" text=\"bind:DESCRIPTION\"/><Cell col=\"3\" text=\"bind:USE_YN\"/><Cell col=\"4\" text=\"bind:REG_USER\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","128","26","118","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Button00");
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

        this.Button00_onclick = function(obj,e)
        {
        	trace('=====trace=====');
        	trace(this.dsData.saveXML());
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();

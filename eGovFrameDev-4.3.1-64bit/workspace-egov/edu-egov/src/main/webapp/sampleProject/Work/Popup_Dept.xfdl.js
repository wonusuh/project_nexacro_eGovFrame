(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Popup_Dept");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(300,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dept", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "DEPT_CODE","type" : "STRING","size" : "256"},{"id" : "DEPT_NAME","type" : "STRING","size" : "256"},{"id" : "DEPT_EMP","type" : "STRING","size" : "256"}]},"Rows" : [{"DEPT_CODE" : "10","DEPT_NAME" : "회계","DEPT_EMP" : "Kate"},{"DEPT_CODE" : "20","DEPT_NAME" : "재무","DEPT_EMP" : "Dennis"},{"DEPT_CODE" : "30","DEPT_NAME" : "인사","DEPT_EMP" : "Adam"},{"DEPT_CODE" : "40","DEPT_NAME" : "지원","DEPT_EMP" : "Jackson"},{"DEPT_CODE" : "50","DEPT_NAME" : "영업","DEPT_EMP" : "Belle"},{"DEPT_CODE" : "60","DEPT_NAME" : "IT","DEPT_EMP" : "Wonu"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","10","10","100","27",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Department List");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_dept","10","40","280","300",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_dept");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Code\"/><Cell col=\"1\" text=\"Name\"/><Cell col=\"2\" text=\"Manager\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_CODE\"/><Cell col=\"1\" text=\"bind:DEPT_NAME\"/><Cell col=\"2\" text=\"bind:DEPT_EMP\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ok","10","345","100","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("OK");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","160","345","100","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Cancel");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",300,400,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Popup_Dept.xfdl", function() {
        // "OK" 버튼 클릭이벤트
        this.fn_ok = function(obj,e)
        {
        	// 부서코드
        	const sDeptCode = this.ds_dept.getColumn(this.ds_dept.rowposition, 'DEPT_CODE');

        	// 부서명
        	const sDeptName = this.ds_dept.getColumn(this.ds_dept.rowposition, 'DEPT_NAME');

        	trace('sDeptCode', sDeptCode);
        	trace('sDeptName', sDeptName);

        	// 모화면으로 전달할 파라미터
        	this.close(sDeptCode + ':' + sDeptName);
        };

        // 팝업 닫기
        this.fn_cancel = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_ok.addEventHandler("onclick",this.fn_ok,this);
            this.btn_cancel.addEventHandler("onclick",this.fn_cancel,this);
        };
        this.loadIncludeScript("Popup_Dept.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();

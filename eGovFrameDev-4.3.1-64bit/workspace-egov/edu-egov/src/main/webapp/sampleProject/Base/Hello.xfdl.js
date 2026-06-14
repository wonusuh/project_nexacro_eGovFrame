(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Hello");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00","50","50","150","75",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Hello World");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Hello.xfdl", function() {
        // 버튼 클릭이벤트
        this.fn_click = function(obj,e)
        {
        	// this.alert('Hello World');
        	// nexacro.getEnvironment().efn_commFunction();

        	//
        	const objApp = nexacro.getApplication();
        	let nRowCount = objApp.gds_corp.getRowCount();
        	trace('nRowCount', nRowCount);

        	//
        	objApp.afn_commFunction();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.fn_click,this);
        };
        this.loadIncludeScript("Hello.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();

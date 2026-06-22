(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Top");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,70);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00","10","10","250","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Nexacro Sample Project");
            this.addChild(obj.name, obj);

            obj = new Menu("mnu_top","270","10",null,"50","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("gds_menu");
            obj.set_idcolumn("MENU_ID");
            obj.set_captioncolumn("MENU_NAME");
            obj.set_levelcolumn("MENU_LEVEL");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,70,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.mnu_top.addEventHandler("onmenuclick",this.mnu_top_onmenuclick,this);
        };
        this.loadIncludeScript("Form_Top.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();

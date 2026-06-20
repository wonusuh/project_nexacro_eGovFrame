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
                this._setFormPosition(1280,840);
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

            obj = new Grid("grd_left","10","70","250",null,null,"10",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("gds_menu");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Menu\" displaytype=\"normal\" edittype=\"none\"/></Band><Band id=\"body\"><Cell text=\"bind:MENU_NAME\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:MENU_LEVEL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","270","70",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_work
            obj = new Layout("default","",0,0,this.div_work.form,function(p){});
            this.div_work.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,840,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Work.xfdl", function() {
        // 화면을 오픈하는 함수
        this.fn_openForm = (sMenuId) => {
        	const objApp = nexacro.getApplication();
        	const rowidx = objApp.gds_menu.findRow("MENU_ID", sMenuId);
        	const sFormUrl = objApp.gds_menu.getColumn(rowidx, "FORM_URL");

        	// url 이 falsy 값일 때 함수 종료
        	if(typeof sFormUrl === 'undefined' || !sFormUrl) {
        		trace('url 을 확인하세요.');
        		return;
        	}

        	this.div_work.url = sFormUrl;
        };

        this.mnu_top_onmenuclick = function(obj,e)
        {
        	this.fn_openForm(e.id);
        };

        this.grd_left_oncelldblclick = function(obj,e)
        {
        	const objApp = nexacro.getApplication();
        	const sMenuId = objApp.gds_menu.getColumn(e.row, "MENU_ID");
        	this.fn_openForm(sMenuId);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.mnu_top.addEventHandler("onmenuclick",this.mnu_top_onmenuclick,this);
            this.grd_left.addEventHandler("oncelldblclick",this.grd_left_oncelldblclick,this);
        };
        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();

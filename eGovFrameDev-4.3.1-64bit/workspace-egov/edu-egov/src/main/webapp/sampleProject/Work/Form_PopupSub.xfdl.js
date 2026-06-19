(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_PopupSub");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(750,750);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_child", this);
            obj._setContents({});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new MaskEdit("msk_number","10","50","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","90","400","150",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_data");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"125\"/><Column size=\"125\"/><Column size=\"125\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"CODE\"/><Cell col=\"1\" text=\"NAME\"/><Cell col=\"2\" text=\"MANAGER\"/></Band><Band id=\"body\"><Cell text=\"bind:CODE\"/><Cell col=\"1\" text=\"bind:NAME\"/><Cell col=\"2\" text=\"bind:MANAGER\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_string","10","10","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","10","250","75","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Default");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","110","250","75","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Separator");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01","213","250","75","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Json");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_02","320","250","75","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Object");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","350","10","25","25",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("X");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",750,750,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_PopupSub.xfdl", function() {
        // 화면 최초 로딩
        this.form_onload = function(obj,e)
        {
        	// this.st_title.text = this.parent.param_title;
        	this.edt_string.value = this.parent.param_string;
        	this.msk_number.value = this.parent.param_number;
        	this.ds_child.copyData(this.parent.param_object);
        };

        // 모달 닫기
        this.Button01_onclick = function(obj,e)
        {
        	// 	const rtn1 = this.edt_string.value;
        	// 	const rtn2 = this.msk_number.value;
        	// 	this.close(rtn1 + '||' + rtn2);

        	// JSON
        	const objRtn = {
        		rtn1 : this.edt_string.value,
        		rtn2 : this.msk_number.value
        	};
        	this.close(JSON.stringify(objRtn));
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.Button00_00.addEventHandler("onclick",this.Button00_00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
        };
        this.loadIncludeScript("Form_PopupSub.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();

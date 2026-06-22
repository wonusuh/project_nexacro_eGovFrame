(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Left");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(270,770);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("grd_left","10","10","250",null,null,"10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("gds_menu");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Menu\" displaytype=\"normal\" edittype=\"none\"/></Band><Band id=\"body\"><Cell text=\"bind:MENU_NAME\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:MENU_LEVEL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",270,770,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Left.xfdl", function() {
        // 화면을 오픈하는 함수
        this.fn_openForm = (sMenuId) => {
        	const objApp = nexacro.getApplication();
        	const rowidx = objApp.gds_menu.findRow('MENU_ID', sMenuId);
        	const sFormUrl = objApp.gds_menu.getColumn(rowidx, 'FORM_URL');

        	// 잘못된 url 이면 여기서 함수종료
        	if(!sFormUrl || typeof sFormUrl === 'undefined') {
        		return;
        	}

        	const arrObj = objApp.mainframe.VFrameSet00.HFrame00.FrameSet00.all;
        	for(let i = 0; i < arrObj.length; i += 1) {
        		//
        		if(arrObj[i].name === sMenuId) {
                    arrObj[i].setFocus();
                    return;
        		}
        	}

        	const objChildFrame = new ChildFrame(sMenuId, 0, 0, 800, 600);
        	objChildFrame.formurl = sFormUrl;
        	objChildFrame.resizable = true;
        	objChildFrame.openstatus = 'normal';

        	objApp.mainframe.VFrameSet00.HFrameSet00.FrameSet00.addChild(
        		sMenuId,
        		objChildFrame
        	);
        	objChildFrame.show();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.grd_left.addEventHandler("oncelldblclick",this.grd_left_oncelldblclick,this);
        };
        this.loadIncludeScript("Form_Left.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();

(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Popup");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(750,250);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_data", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "CODE","type" : "STRING","size" : "256"},{"id" : "NAME","type" : "STRING","size" : "256"},{"id" : "MANAGER","type" : "STRING","size" : "256"}]},"Rows" : [{"CODE" : "10","NAME" : "Accounting Team","MANAGER" : "Kate"},{"CODE" : "20","NAME" : "Finamces Team","MANAGER" : "Dennis"},{"CODE" : "30","NAME" : "Human Resource Team","MANAGER" : "Adam"},{"CODE" : "40","NAME" : "Support Team","MANAGER" : "Jackson"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Edit("edt_string","10","10","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_number","10","50","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","90","400","150",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_data");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"125\"/><Column size=\"125\"/><Column size=\"125\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"CODE\"/><Cell col=\"1\" text=\"NAME\"/><Cell col=\"2\" text=\"MANAGER\"/></Band><Band id=\"body\"><Cell text=\"bind:CODE\"/><Cell col=\"1\" text=\"bind:NAME\"/><Cell col=\"2\" text=\"bind:MANAGER\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","444","22","191","43",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Execute(basic)");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","460","87","191","43",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Execute");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","550","197","100","43",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Center");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_01","430","197","100","43",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Component");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",750,250,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Popup.xfdl", function() {
        // 클릭 이벤트
        this.Button00_onclick = function(obj,e)
        {
        	const objChildFrame = new ChildFrame('popupModal', 0, 0, 480, 420);
        	objChildFrame.formurl = 'Work::Form_PopupSub.xfdl';
        	objChildFrame.dragmovetype = 'all';
        	objChildFrame.showtitlebar = false;
        	objChildFrame.openalign = 'center middle';
        	objChildFrame.overlaycolor = "RGBA(196,196,196,0.5)";

        	// 전달할 파라미터
        	const objParam = {
        		param_title : 'Modal Popup',
        		param_string : this.edt_string.value,
        		param_number : this.msk_number.value,
        		param_object : this.ds_data
        	};

        	// 모달 호출
        	objChildFrame.showModal(
        		this.getOwnerFrame(),
        		objParam,
        		this,
        		'fn_popupCallback'
        	);
        };

        // 팝업 모달의 콜백함수
        this.fn_popupCallback = (strPopupID, strReturn) => {
        	// 모달로부터 받아온 리턴이 없으면 함수 종료
        	if(!strReturn) {
        		return;
        	}

        	// popupModal 만 처리
        	if(strPopupID === 'popupModal') {
        		// 		const rtn1 = strReturn.split('||')[0];
        		// 		const rtn2 = strReturn.split('||')[1];

        		// JSON
        		const objJson = JSON.parse(strReturn);
        		const rtn1 = objJson.rtn1;
        		const rtn2 = objJson.rtn2;
        		this.alert('Return Value : ' + rtn1 + rtn2 + "JSON");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("Form_Popup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();

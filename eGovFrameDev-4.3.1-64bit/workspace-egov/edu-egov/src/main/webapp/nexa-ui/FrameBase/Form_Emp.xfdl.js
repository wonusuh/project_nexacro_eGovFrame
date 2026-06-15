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
            obj.set_text("Employees");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\" band=\"left\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"25\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"ID\"/><Cell col=\"2\" text=\"Name\"/><Cell col=\"3\" text=\"Department\"/><Cell col=\"4\" text=\"Position\"/><Cell col=\"5\" text=\"Hired Date\"/><Cell col=\"6\" text=\"Salary\"/><Cell col=\"7\" text=\"Gender\"/><Cell col=\"8\" text=\"Marital&#13;&#10;Status\"/><Cell col=\"9\" text=\"Skills\"/><Cell col=\"10\" text=\"Hobby\"/><Cell col=\"11\" text=\"Memo\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:EMP_ID\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"AA-###\" maskedittype=\"string\"/><Cell col=\"2\" text=\"bind:EMP_NAME\" displaytype=\"normal\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:DEPT_CODE\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_dept\" combocodecol=\"DEPT_CODE\" combodatacol=\"DEPT_NAME\"/><Cell col=\"4\" text=\"bind:POSITION\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_pos\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"5\" text=\"bind:HIRE_DATE\" displaytype=\"date\" edittype=\"date\"/><Cell col=\"6\" text=\"bind:SALARY\" displaytype=\"number\" edittype=\"mask\" maskeditformat=\"#,###\"/><Cell col=\"7\" text=\"expr:GENDER === &quot;M&quot; ? &quot;Male&quot; : &quot;Female&quot;\"/><Cell col=\"8\" text=\"bind:MARRIED\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"9\" text=\"bind:SKILL\" displaytype=\"multicombocontrol\" edittype=\"multicombo\" multicombodataset=\"ds_skill\" multicombocodecol=\"CODE\" multicombodatacol=\"NAME\"/><Cell col=\"10\" text=\"bind:HOBBY\"/><Cell col=\"11\" text=\"bind:MEMO\" edittype=\"textarea\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" text=\"expr:comp.parent.ds_emp.rowcount\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\" text=\"expr:dataset.getSum(&apos;SALARY&apos;)\" displaytype=\"number\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_detail","10","310","850","350",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div00");
            obj.set_border("1px solid #9c9c9c");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","20","100","30",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("0");
            obj.set_text("Name");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","69","100","30",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("1");
            obj.set_text("Department");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static00_01","20","119","100","30",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("2");
            obj.set_text("Salary");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static00_02","20","202","100","30",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("3");
            obj.set_text("Position");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static00_03","20","279","100","30",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("4");
            obj.set_text("Hobby");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static00_04","400","279","100","30",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("5");
            obj.set_text("Skill");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static00_05","400","202","100","30",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("6");
            obj.set_text("Memo");
            obj.getSetter("onchanged").set("Common_onchanged");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static00_06","400","119","100","30",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("7");
            obj.set_text("Gender");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static00_07","400","69","100","30",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("8");
            obj.set_text("Hire Date");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static00_08","400","20","100","30",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("9");
            obj.set_text("Emp ID");
            this.div_detail.addChild(obj.name, obj);

            obj = new Edit("edt_name","150","20","200","30",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("10");
            this.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_empId","491","20","178","30",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("11");
            obj.set_format("AA-###");
            obj.set_type("string");
            this.div_detail.addChild(obj.name, obj);

            obj = new Combo("cbo_dept","150","69","200","30",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("12");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("DEPT_CODE");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_text("Combo00");
            this.div_detail.addChild(obj.name, obj);

            obj = new Calendar("cal_hireDate","491","69","149","30",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("13");
            this.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_salary","150","119","200","30",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("14");
            obj.set_format("#,#");
            this.div_detail.addChild(obj.name, obj);

            obj = new Radio("rdo_gender","491","119","181","30",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("15");
            obj.set_rowcount("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_detail_form_rdo_gender_innerdataset = new nexacro.NormalDataset("div_detail_form_rdo_gender_innerdataset", obj);
            div_detail_form_rdo_gender_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "A","datacolumn" : "All"},{"codecolumn" : "F","datacolumn" : "Female"},{"codecolumn" : "M","datacolumn" : "Male"}]});
            obj.set_innerdataset(div_detail_form_rdo_gender_innerdataset);
            this.div_detail.addChild(obj.name, obj);

            obj = new CheckBox("chk_married","701","119","131","30",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("16");
            obj.set_text("Marital Status");
            this.div_detail.addChild(obj.name, obj);

            obj = new ListBox("lst_pos","150","180","200","75",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("17");
            obj.set_innerdataset("ds_pos");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            this.div_detail.addChild(obj.name, obj);

            obj = new TextArea("txt_memo","491","180","142","75",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("18");
            this.div_detail.addChild(obj.name, obj);

            obj = new MultiCombo("mcbo_hobby","150","257","200","75",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("19");
            obj.set_innerdataset("ds_hobby");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_edittype("multitag");
            obj.set_text("MultiCombo00");
            this.div_detail.addChild(obj.name, obj);

            obj = new CheckBoxSet("chsk_skill","491","257","151","75",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("20");
            obj.set_innerdataset("ds_skill");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_rowcount("3");
            this.div_detail.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_search.form
            obj = new Layout("default","",0,0,this.div_search.form,function(p){});
            this.div_search.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_detail.form
            obj = new Layout("default","",0,0,this.div_detail.form,function(p){});
            this.div_detail.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1000,670,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_detail.form.edt_name","value","ds_emp","EMP_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_detail.form.msk_empId","value","ds_emp","EMP_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_detail.form.cbo_dept","value","ds_emp","DEPT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_detail.form.cal_hireDate","value","ds_emp","HIRE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_detail.form.msk_salary","value","ds_emp","SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_detail.form.rdo_gender","value","ds_emp","GENDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_detail.form.chk_married","value","ds_emp","MARRIED");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_detail.form.lst_pos","value","ds_emp","POSITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_detail.form.txt_memo","value","ds_emp","MEMO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_detail.form.txt_memo","background","ds_emp","MEMO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_detail.form.mcbo_hobby","value","ds_emp","HOBBY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_detail.form.chsk_skill","value","ds_emp","SKILL");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Emp.xfdl", function() {
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

        this.btn_retrieve_onclick = function(obj,e)
        {
        	this.transaction(
        		'svcGetEmp',
        		'http://localhost:8080/edu-egov/edu/getEmp.do',
        		'',
        		'',
        		'',
        		''
        	);
        	trace('getData');
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_retrieve.addEventHandler("onclick",this.btn_retrieve_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.Button00_00_00_onclick,this);
            this.div_search.form.edt_deptCode.addEventHandler("onchanged",this.div_search_edt_deptCode_onchanged,this);
            this.div_search.form.btn_findDept.addEventHandler("onclick",this.fn_openPopupDept,this);
            this.div_search.form.rdo_gender.addEventHandler("onitemchanged",this.onGenderChanged,this);
            this.div_detail.form.Static00_00.addEventHandler("onclick",this.div_detail_Static00_00_onclick,this);
            this.div_detail.form.Static00_02.addEventHandler("onclick",this.div_detail_Static00_02_onclick,this);
            this.div_detail.form.Static00_03.addEventHandler("onclick",this.div_detail_Static00_03_onclick,this);
            this.div_detail.form.Static00_05.addEventHandler("onclick",this.div_detail_Static00_05_onclick,this);
            this.div_detail.form.Static00_06.addEventHandler("onclick",this.div_detail_Static00_06_onclick,this);
            this.div_detail.form.Static00_07.addEventHandler("onclick",this.div_detail_Static00_07_onclick,this);
            this.div_detail.form.Static00_08.addEventHandler("onclick",this.div_detail_Static00_08_onclick,this);
            this.div_detail.form.txt_memo.addEventHandler("onchanged",this.Common_onchanged,this);
        };
        this.loadIncludeScript("Form_Emp.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();

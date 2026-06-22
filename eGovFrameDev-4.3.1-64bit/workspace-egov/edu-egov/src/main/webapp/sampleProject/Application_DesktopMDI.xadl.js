(function()
{
    return function()  
	{
        this.on_loadAppVariables = function()
        {		
            var obj = null;
			// global dataobject
		
            // global dataset
            obj = new Dataset("gds_corp", this);
            obj._setContents({"ColumnInfo" : {"ConstColumn" : [ {"id" : "DESC","type" : "STRING","size" : "30","value" : "Corporation List"},{"id" : "ROW_CNT","type" : "INT","size" : "30","value" : "3"}],"Column" : [ {"id" : "CODE","type" : "STRING","size" : "256"},{"id" : "NAME","type" : "STRING","size" : "256"}]},"Rows" : [{"CODE" : "KR","NAME" : "한국"},{"CODE" : "JP","NAME" : "일본"},{"CODE" : "US","NAME" : "미국"}]});
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_menu", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "MENU_ID","type" : "STRING","size" : "256"},{"id" : "MENU_NAME","type" : "STRING","size" : "256"},{"id" : "MENU_LEVEL","type" : "STRING","size" : "256"},{"id" : "FORM_URL","type" : "STRING","size" : "256"}]},"Rows" : [{"MENU_ID" : "10","MENU_NAME" : "Human Resources","MENU_LEVEL" : "0"},{"MENU_ID" : "1010","MENU_NAME" : "Employee Management","MENU_LEVEL" : "1"},{"MENU_ID" : "101010","MENU_NAME" : "Hello","MENU_LEVEL" : "2","FORM_URL" : "Base::Hello.xfdl"},{"MENU_ID" : "101020","MENU_NAME" : "Employee","MENU_LEVEL" : "2","FORM_URL" : "Work::Form_Emp.xfdl"},{"MENU_ID" : "101030","MENU_NAME" : "Employee List","MENU_LEVEL" : "2","FORM_URL" : "Work::Form_EmpList.xfdl"},{"MENU_ID" : "1020","MENU_NAME" : "Department Management","MENU_LEVEL" : "1"},{"MENU_ID" : "102010","MENU_NAME" : "Department","MENU_LEVEL" : "2"},{"MENU_ID" : "102020","MENU_NAME" : "Department List","MENU_LEVEL" : "2"},{"MENU_ID" : "20","MENU_NAME" : "Admin","MENU_LEVEL" : "0"},{"MENU_ID" : "2110","MENU_NAME" : "User Management","MENU_LEVEL" : "1"},{"MENU_ID" : "3830","MENU_NAME" : "Setting","MENU_LEVEL" : "1"}]});
            this._addDataset(obj.name, obj);
            
            // global variable

            
            obj = null;
        };
 
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("Application_DesktopMDI");
            this.set_screenid("DesktopMDI_screen");

            if (this._is_attach_childframe)
            	return;
        
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","1280","840",null,null,this);
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("true");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;        
            // tray

        };
        
        this.loadPreloadList = function()
        {

        };
        
        this.mainframe_createBodyFrame = function()
        {
            var frame0 = new VFrameSet("VFrameSet00",null,null,null,null,null,null,this);
            frame0.set_separatesize("70, *");
            this.addChild(frame0.name, frame0);
            this.frame=frame0;

            var frame1 = new ChildFrame("TopFrame",null,null,null,null,null,null,"FrameBase::Form_Top.xfdl",frame0);
            frame1.set_showtitlebar("false");
            frame0.addChild(frame1.name, frame1);
            frame1.set_formurl("FrameBase::Form_Top.xfdl");


            var frame2 = new HFrameSet("HFrameSet00",null,null,null,null,null,null,frame0);
            frame2.set_separatesize("270, *");
            frame0.addChild(frame2.name, frame2);

            var frame3 = new ChildFrame("LeftFrame",null,null,null,null,null,null,"FrameBase::Form_Left.xfdl",frame2);
            frame3.set_showtitlebar("false");
            frame2.addChild(frame3.name, frame3);
            frame3.set_formurl("FrameBase::Form_Left.xfdl");


            var frame4 = new FrameSet("FrameSet00",null,null,null,null,null,null,frame2);
            frame2.addChild(frame4.name, frame4);
        };
        
        this.on_initEvent = function()
        {

        };
        
        // script Compiler

        this.checkLicense("");
        
        this.loadPreloadList();

        this.loadIncludeScript("Application_DesktopMDI.xadl");
    };
}
)();

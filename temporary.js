// 화면을 오픈하는 함수
this.fn_openForm = (sMenuId) => {
    const objApp = nexacro.getApplication();
    const rowidx = objApp.gds_menu.findRow("MENU_ID", sMenuId);
    const sFormUrl = objApp.gds_menu.getColumn(rowidx, "FORM_URL");

    // 잘못된 url 이면 여기서 함수종료
    if (!sFormUrl || typeof sFormUrl === "undefined") {
        return;
    }

    const arrObj = objApp.mainframe.VFrameSet00.HFrame00.FrameSet00.all;
    for (let i = 0; i < arrObj.length; i += 1) {
        //
        if (arrObj[i].name === sMenuId) {
            arrObj[i].setFocus();
            return;
        }
    }

    const objChildFrame = new ChildFrame(sMenuId, 0, 0, 800, 600);
    objChildFrame.formurl = sFormUrl;
    objChildFrame.resizable = true;
    objChildFrame.openstatus = "normal";

    objApp.mainframe.VFrameSet00.HFrameSet00.FrameSet00.addChild(
        sMenuId,
        objChildFrame
    );
    objChildFrame.show();
};

// 그리드 더블클릭 이벤트
this.grd_left_oncelldblclick = function (obj:nexacro.Grid, e:nexacro.GridClickEventInfo) {
    const objApp = nexacro.getApplication();
    const sMenuId = objApp.gds_menu.getColumn(e.row, "MENU_ID");
    this.fn_openForm(sMenuId);
};

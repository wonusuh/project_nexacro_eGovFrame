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
};

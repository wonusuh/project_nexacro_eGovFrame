// 화면을 오픈하는 함수
const fn_openForm = (sMenuId: string): void => {
    const nexacro = {
        getApplication: () => ({
            gds_menu: {
                findRow: (col: string, val: string) => 0,
                getColumn: (row: number, col: string) => "someUrl"
            },
            mainframe: {
                VFrameSet00: {
                    HFrame00: {
                        FrameSet00: {
                            all: [
                                { name: "someMenuId", setFocus: () => {} }
                            ]
                        }
                    }
                }
            }
        })
    };

    const objApp = nexacro.getApplication();
    const rowidx = objApp.gds_menu.findRow("MENU_ID", sMenuId);
    const sFormUrl = objApp.gds_menu.getColumn(rowidx, "FORM_URL");

    // 잘못된 url 이면 여기서 함수종료
    if (!sFormUrl || typeof sFormUrl === "undefined") {
        return;
    }

    const arrObj = objApp.mainframe.VFrameSet00.HFrame00.FrameSet00.all;
    for (let i: number = 0; i < arrObj.length; i += 1) {
        //
        if (arrObj[i].name === sMenuId) {
            arrObj[i].setFocus();
            return;
        }
    }
};

// 2026-06-26 넥사크로 교재 1회독 끝

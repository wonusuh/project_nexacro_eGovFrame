//XJS=Lib_Common.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        // 오늘 날짜를 반환
        this.lfn_getToday = () => {
            const objDate = new Date();
            let sToday = objDate.getFullYear().toString();
            sToday += (objDate.getMonth() + 1)
                .toString()
                .padLeft(2, "0");
            sToday += objDate.getDate().toString().padLeft(2, "0");
            return sToday;
        };

        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();

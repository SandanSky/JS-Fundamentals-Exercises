function roadRadar(arr) {
    "use strict";

    let speed = arr[0];
    let area = arr[1];
    function speedLimit(zone) {
        switch (area) {
            case "motorway":
                return 130;
            case "interstate":
                return 90;
            case "city":
                return 50;
            case "residential":
                return 20;
        }
    }
    function getOverLimit(sp, lim) {
        let difference = sp - lim;
        let result = "";

        if (difference > 0) {
            if (difference > 0 && difference <= 20) {
                result = "speeding";
            } else if (difference > 20 && difference <= 40) {
                result = "excessive speeding"
            } else if (difference > 40) {
                result = "reckless driving";
            }
        }
        return result;
    }
    let over = speedLimit(area);
    console.log(getOverLimit(speed, over));
}


roadRadar([40, 'city']);
roadRadar([21, 'residential']);
roadRadar([120, 'interstate']);
roadRadar([200, 'motorway']);
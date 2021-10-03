import { env } from '@defaultValues'
import LogRocket from 'logrocket';

const initiator = () => {
    if(typeof window !== 'undefined' && env === 'production'){
        const aScript = document.createElement('script');
        aScript.type = 'text/javascript';
        aScript.src = "/js/newrelic.js";

        const aScript2 = document.createElement('script');
        aScript2.type = 'text/javascript';
        aScript2.src = "/js/tagmanager.js";

        document.head.appendChild(aScript);
        document.head.appendChild(aScript2);
        aScript.onload = () => {};
        aScript2.onload = () => {};

        // Start logrocket
        // LogRocket.init('fq4efv/appcuradeudacom');
    }
}

export default initiator
const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VU25KiSBT8l3rVHhBQwIiOWEWUi3gDRWdjHkoosAQLpAoQO/z3DfoS3Q87s71vFXXJk5WZ57wAkmGKbNSA4QvIC1xBhtola3IEhmBcRhEqQBeEkEEwBL7OarJKbmX/tlezbHPbJLbudyJ3mVidn4HinU84lqiw2B+ewaML8vKY4uAPgD0kElivy9lPZWmfNEm1/N06P2806Mb4MpkG96OqcI1v9+Jn8GgRIS4wifX8hC6ogKmNmhXExffoozmqRY9TN+p0sEH0vDkf5vk8K9aJia3cNbbX4mcTE36SJN+jL+wH087Orzs0uIvu0k86Yo1NrBOtzpdueFHCsejPK9E09Df6FMcEhWaICMOs+bbu+vh6ljN0kwZKkvtT9+L6+WnmLiXPOiysZJHJzn5yIPV0x3+PuLSvbhxNoDY6RqYVMEWyJ3RiOdbU0w00oaGZpuS0HJi7w1fiq+IjK8n/0b3Wp9m+EhZeNLgk+WhxtQYxMamkzpSqoRXMuVvMCQvL29bfo1/PlXC71m1i5ciT5oak2PPa5G6u1xudDHTaCarL2bOJtx990oesLP7EMlib6ob1nGKyODjOoWh0xja7sairtymitj9b9baZ3fg22ZH9YanMa9VvrHmMjfG2FqPwds62bpysDw2/q4VQy/zA0OLn1x8lqDFDMOw9uqBAMaasgAxnpN0bKF0Aw8pFQYHYq7rgsjHjuS77ZGW4EzXqy32HF4KVl1kz/7LF5SYt07uR9/hO/Qy6IC+yAFGKQgNTlhWNgyiFMaJg+PevLiDoxt58a6uJvS6IcEHZlpR5msHww9SPQxgEWUmY25BAaxeoAEP+cxsxhklMWxlLAovghCuknSCjYBjBlKJHF4SowgFq8YC+k3Urfjqtb0KjGxbMLoO1WreUTxl5u3IMA17qq+KTqqrwSQoQ/6Qc+d7TAImBelRQ2JcC0AX4vWXaN791MFyMrn1rZvavQrlOllZVyslgF4lnd/Tqwpv0qEAhGLKiRF1whEFS5l6WIPIH3FzW1lyVXlfIEVZNwpGbQeaX1bx6b7evloLhy+eY0rKwxRsM+vZ4MzmALri8JhC3Pxf6kqzyQk9WBXEoSH/RH3UrJMzzHwSxFvdd9PZFiBjEKQVDoC24uF+YU932Kq6oZ7ORHo+0eAQ+TfoI+1uavFk4KihssLyO7kLt7m3pVP08mIrvyD5fFxxPbb5ahVuDf/4XEDAEU0NxOtUdNa7t16WxOlq98T6SwvSgTDE2HSveo+YgXxt5SzyxWGjBdRaV9nbQQUs8Eva+qyd7v+NK0km6N3WA9x2orZ/bam9h+VrMH193Ka4W9aa5O03TEcYDLl8c+3ni+EFVLA7ytp8m4ZKZDg+vdX7bnEfb8VrVjy6nC9e+1clHsb10FrJEalk1pJPha/VbG76OgfR9/OLXDnl5j1aE0es0I7C16L/M+Zpy/tH9gvE+H3+TpPH2Rta2PKNZyRuKSvW0Kc2j4Gur6XnZY47NqXONze/ibqyCx+NXF+QpZFFWXMAQQBIWGQ5BF6SQstFno3r4giiDlxwMe7Ko9AVeUuXHP+kfg/jdBwAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE : process.env.ANTIDELETE || 'yes',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'no',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'no',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

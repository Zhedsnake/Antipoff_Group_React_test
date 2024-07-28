import {getStuffsAction} from './stuffs-actions/stuffs'
import {getOneStuffAction} from './stuffs-actions/oneStuff'
import {logInAction} from "./logIn-Registration/logIn";
import {registrationAction} from "./logIn-Registration/registraion";
import {defLogIn} from "./logIn-Registration/defLogIn";
import {defReg} from "./logIn-Registration/defReg";
import {defStuffs} from "./stuffs-actions/defStuffs";
import {defOneStuff} from "./stuffs-actions/defOneStuff";
import * as authFormActions from "./auth-form/authForm";

export default {
    getStuffsAction,
    getOneStuffAction,
    logInAction,
    registrationAction,
    defLogIn,
    defReg,
    defStuffs,
    defOneStuff,
    ...authFormActions
}

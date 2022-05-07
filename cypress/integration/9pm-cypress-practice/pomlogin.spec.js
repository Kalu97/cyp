import { dashboard,dashboard_selector } from"../../support/model/dashboard"
import {login,login_selector} from "../../support/model/login"

describe("verify the login HRM site using POM",()=>{
    it('verify logo on homepage',()=>{
        login.verifylogovisible()
    })
    it('verify the fogot link on site',()=>{
        login.verifyforgotlink()
    })
    it("verify login functionality",()=>{
        login.login('Admin','admin123')
        dashboard.verifylogin()
    })
})

import {LoginPopUp} from "@/common/components/LoginPopUp/LoginPopUp.tsx";

const registerProps = {
  buttonName: 'Start Yor Free Trial',
  dialogTitle:'Start your free trial today',
  dialogDescription: 'Register now',
  submitButtonName:'Register',
  variant: 'default'
}

const loginProps = {
  buttonName: 'Log in',
  dialogTitle: 'Log in',
  dialogDescription: 'New to Monkey$Money? Sign up today.',
  submitButtonName: 'Log in',
  variant: 'link'
}

export const Login = () => (
    <div>
      {/*<a href="/" className="mr-2 text-black text-sm" >Log in</a>*/}
      <LoginPopUp dialogData={loginProps} />
      <LoginPopUp dialogData={registerProps} className='link' />
    </div >
  )
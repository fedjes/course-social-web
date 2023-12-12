import React, { ComponentType } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { RootStateType } from "../redux/redux-store";



let mapStateToPropsForRedirect = (state: RootStateType) => ({
    isAuth: state.auth.isAuth
})

type withAuthRedirectPropsType = {
    isAuth: boolean 
}
export const withAuthRedirect=(Component: any) => {
    class RedirectComponent extends React.Component<withAuthRedirectPropsType> {
        
        
        render() {
            debugger
            console.log(this.props.isAuth);
            
            // const { isAuth, ...rest } = this.props;

            // if (!isAuth) {
            //   return <Redirect to="/login" />;
            // } else {
            //   return <Component {...rest as T} />;
            // }
            if(!this.props.isAuth){
                return <Redirect to={'/Login'}/>
            } else {
                return <Component {...this.props}/>
            }
        }
    }
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent
}












// export const withAuthRedirect = <T extends {}>(
//     Component: React.ComponentType<T & withAuthRedirectPropsType>
// ): React.ComponentType<T & withAuthRedirectPropsType> => {
//     class RedirectComponent extends React.Component<T & withAuthRedirectPropsType> {
//         render() {
//             if (!this.props.isAuth) {
//                 return <Redirect to="/Login" />;
//             } else {
//                 return <Component {...this.props} />;
//             }
//         }
//     }

//     const mapStateToPropsForRedirect = (state: RootStateType) => ({
//         isAuth: state.auth.isAuth
//     });

//     const ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);
//     return ConnectedAuthRedirectComponent;
// };













// type MapStateToProps = {
//     isAuth: boolean
// }

// const MapStateToProps = (state: RootStateType): MapStateToProps => {
//     return {
//         isAuth: state.auth.isAuth
//     }
// }

// export const withAuthRedirect = <T,>(Component: ComponentType<T> ) => {

//     const RedirectComponent = (props: MapStateToProps) => {
//         const {isAuth, ...restProps} = props

//         if (!props.isAuth) return <Redirect to={'/login'}/>

//         return <Component {...restProps as T} />
//     }

//     return connect(MapStateToProps)(RedirectComponent)
// }
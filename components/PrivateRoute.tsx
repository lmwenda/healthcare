import Dashboard from "../pages/client/dashboard";

const withAuth = (Component: any, isLoggedIn: boolean) => {
  const Auth = (props: any) => {
    // If user is not logged in, return login component
    if (!isLoggedIn) {
      return (
        <Dashboard />
      );
    }

    // If user is logged in, return original component
    return (
      <Component {...props} />
    );
  };

  // Copy getInitial props so it will run as well
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default withAuth;


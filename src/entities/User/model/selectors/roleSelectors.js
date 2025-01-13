const isUserAuthorized = (state) => !!state.user?.id;

export { isUserAuthorized };

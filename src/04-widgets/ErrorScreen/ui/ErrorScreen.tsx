export const ErrorScreen = () => {
    const reloadPage = () => window.location.reload();
    return (
        <div>
            <p>ErrorScreen</p>
            <button type="button" onClick={reloadPage}>Reload</button>
        </div>
    );
};

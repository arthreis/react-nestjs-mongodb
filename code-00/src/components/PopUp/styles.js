const styles = ({
    popup: {
        position: 'fixed',
        width: '100%',
        height: '100%',

        top: '0',
        left: '0',
        right: '0',
        bottom: '0',

        margin: 'auto' ,

        backgroundColor: 'rgba(8,8,8,0.7)',
    },
    content: {
        position: 'absolute',

        top: '40%',
        left: '30%',
        right: '30%',
        bottom: '40%',

        margin: 'auto' ,

        backgroundColor: 'black',
        borderRadius: '5px',
        display: 'grid',
        padding: '15px'
    },
    actions: {
        justifyContent: 'space-between',
        display: 'flex',
    },
    button:{
        borderRadius: '3px',
        width: '50px',
    }
});

export default styles;

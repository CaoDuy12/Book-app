import palette from "./palette"
import typography from "./typography"

const components = {
    MuiButton: {
        styleOverrides: {
            root: {
                padding: '12px 30px',
                borderRadius: '10px',
                border: '0 solid transparent',
                cursor: 'pointer',
                transition: 'all 0.3s ease-in-out',

                '&:hover': {
                    opacity: 0.8,
                },

                '&.btn-save': {
                    // width: '172px',
                    height: '42px',
                    fontSize: '16px',
                    fontWeight: 500,
                    fontFamily: typography.base.fontFamily,
                    backgroundColor: palette.primary.main,
                    color: '#FFF',
                    textTransform: 'capitalize',
                },

                '&.btn-cancel': {
                    width: '116px',
                    height: '42px',
                    fontSize: '16px',
                    fontWeight: 500,
                    fontFamily: typography.base.fontFamily,
                    backgroundColor: '#F8F9FA',
                    color: palette.grey[900],
                    textTransform: 'capitalize',

                    '&.btn-cancel-disabled': {
                        color: palette.grey[400],
                        cursor: 'auto', 
                    }
                },
            },
        },
    },
    MuiTable: {
        styleOverrides: {
            root: {
                bookList: {
                    border: '2px solid #F8F9FA',
                },
            },
        },
    },
}

export default components
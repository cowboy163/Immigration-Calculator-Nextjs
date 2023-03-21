import styles from './samplePage.module.css'
const SamplePage = ({children}) => {
    return(
        <div>
            <div className='container'>
                <div className={styles.page}>
                    <h1>
                        {children}
                    </h1>
                </div>
            </div>
        </div>
    )
}
export default SamplePage
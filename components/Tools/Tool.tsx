import ToolStyle from './tool.module.css';

export const Tools = () => {
    return (
        <div className={ToolStyle['wrapper-tools']} data-aos="fade-right">
            <div className='container'>
                <h1 className={ToolStyle['tool-judul']}>Developed With</h1>
                <div className={ToolStyle['tool-categ']}>
                    <div className={ToolStyle['categ-1']}>
                        <h6 className={ToolStyle['cate1judul']}>Tools</h6>
                        <div className={ToolStyle['card-code']}>
                            <p>VS Code</p>
                        </div>
                    </div>
                    <div className={ToolStyle['categ-1']}>
                        <h6 className={ToolStyle['cate1judul']}>Language</h6>
                        <div className={ToolStyle['card-code-lang']}>
                            <p>HTML 5</p>
                            <p className={ToolStyle['css']}>CSS 3</p>
                            <p className={ToolStyle['bootstrap']}>Bootstrap</p>
                            <p className={ToolStyle['bootstrap']}>Javascript</p>
                            <p>React JS</p>
                            <p>Next JS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
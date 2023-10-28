import ToolStyle from './tool.module.css';

export const Tools = () => {
    return (
        <div className={ToolStyle['wrapper-tools']}>
            <div className='container'>
                <h1 className={ToolStyle['tool-judul']}>Developed With</h1>
                <div className={ToolStyle['tool-categ']}>
                    <div className={ToolStyle['categ-1']}>
                        <h6 className={ToolStyle['cate1judul']}>Tools</h6>
                        <div className={ToolStyle['card-code']}>
                            <p>VS Code</p>
                        </div>
                    </div>
                    <div className={ToolStyle['categ-2']}>
                        <h6 className={ToolStyle['cate2judul']}>Language</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}
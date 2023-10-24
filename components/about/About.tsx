import AboutStyle from './about.module.css';

export const About = () => {
    return (
        // <div className={AboutStyle['wrapper-about']}>
        //     <h5>About</h5>
        // </div>
        <div className={AboutStyle["wrapper"]}>
	<svg className={AboutStyle['svg']}>
		<text x="50%" y="50%" dy=".35em" text-anchor="middle">
			CSS Portal
		</text>
	</svg>
</div>
    )
}
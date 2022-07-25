import Image from 'next/image';
import Link from 'next/link';

export interface ProjectPreviewInterface {
    title: string;
    desc: string;
    linkUrl: string;
    image: string;
}

const ProjectPreview = (props: ProjectPreviewInterface) => {
    return (
        <div>
            <div className="flex gap-4 bg-slate-200">
                <div className="relative w-32 h-24">
                    <Image src={props.image} layout='fill' />
                </div>
                <div className="my-auto">
                    <Link href={props.linkUrl}>
                        <a className="font-bold underline hover:text-rose-500">{props.title}</a>
                    </Link>
                    <div>{props.desc}</div>
                </div>
            </div>
        </div>
    );
};

export default ProjectPreview;
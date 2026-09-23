const projects: { id: string, title: string, description: string, imageUrl: string }[] = [
    {
        id: "1",
        title: "Linux XInput Bridge",
        description: "Linux gamepad bridge built with Go, Node.js, evdev, and uinput, converting raw controller input into a virtual Xbox-compatible controller with configurable mappings and input processing.",
        imageUrl: '/project-1.webp'
    },
    {
        id: "2",
        title: "Laco",
        description: "Media-sharing platform built with Next.js and a decoupled Fastify WebSocket service for async video/audio processing via ffmpeg, using AWS S3 presigned uploads, CloudFront signed delivery, Aurora PostgreSQL, and Redis.",
        imageUrl: '/project-2.webp'
    }
]

export default function Projects() {
    return (
        <div className="flex items-center md:justify-center gap-10 flex-col md:flex-row">
            {
                projects.map(item => <ProjectCard
                    key={item.id}
                    description={item.description}
                    imageUrl={item.imageUrl}
                    title={item.title}
                />)
            }
        </div>
    )
}

function ProjectCard({ imageUrl, title, description }: { imageUrl: string, title: string, description: string }) {
    return (
        <div className="p-2 gap-2 flex-col max-w-[260px] h-[500px] border-2 p-4 box-border rounded-md flex">
            <img src={imageUrl} width="200" height="200"/>
            <h1 className="text-lg font-black">{title}</h1>
            <span>{description}</span>
        </div>
    )
}
const projects: { id: string, title: string, description: string, imageUrl: string }[] = [
    {
        id: "1",
        title: "Linux XInput Bridge",
        description: "Linux gamepad bridge built with Go, Node.js, evdev, and uinput, converting raw controller input into a virtual Xbox-compatible controller with configurable mappings and input processing.",
        imageUrl: '/project-1.webp'
    }
]

export default function Projects() {
    return (
        <div className="flex justify-center">
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
        <div className="p-2 gap-2 flex-col max-w-[260px] border-2 p-4 box-border rounded-md flex justify-center">
            <img src={imageUrl} width="200" height="200"/>
            <h1 className="text-lg font-black">{title}</h1>
            <span>{description}</span>
        </div>
    )
}
const portfolio = [
    // {
    //     id: 0,
    //     projectName: "Unstop Computer – Computer Science E-learning Platform",
    //     url: "",
    //     image: "projects/erp.png",
    //     projectDetail: "",
    //     technologiesUsed: [
    //         {
    //             tech: "ReactJS"
    //         },
    //         {
    //             tech: ".net"
    //         },
    //         {
    //             tech: "GraphQL"
    //         },
    //         {
    //             tech: "Ant Design"
    //         },
    //         {
    //             tech: "TailwindCSS"
    //         },
    //     ]
    // },
    {
        id: 0,
        projectName: "PUJYAPANDITG – Ecommerce and Blogs",
        url: "",
        image: "projects/pujya.png",
        projectDetail: "",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "Ant Design"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 0,
        projectName: "Skyweds - Wedding Planning Platform",
        url: "",
        image: "projects/skyweds.png",
        projectDetail: "",
        technologiesUsed: [
            {
                tech: "Php"
            },
            {
                tech: "laravel"
            },
            {
                tech: "REST API's"
            },
            {
                tech: "My SQL"
            },
            {
                tech: "CSS"
            },
        ]
    },
    
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}

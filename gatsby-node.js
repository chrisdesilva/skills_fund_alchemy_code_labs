exports.createPages = ({ graphql, actions }) => {
    const { createPage, createRedirect } = actions

    createRedirect({
        fromPath: "https://alchemycodelabs.skills.fund/*",
        toPath: "https://codefellowspdx.skills.fund/:splat",
        isPermanent: true,
        force: true,
    })
}

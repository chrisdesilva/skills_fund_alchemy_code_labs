exports.createPages = ({ graphql, actions }) => {
    const { createPage, createRedirect } = actions

    createRedirect({
        fromPath: "https://codefellowspdx.skills.fund/*",
        toPath: "https://alchemycodelab.skills.fund/:splat",
        isPermanent: true,
        force: true,
    })
}

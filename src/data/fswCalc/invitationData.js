const invitationOptions = [
    {
        text: "无",
        value: "no",
        group: "relativesOptions",
    },
    {
        text: "有",
        value: "yes",
        group: "relativesOptions",
    },
]
const invitationData = {
    description: () => <p>您是否已经有 *来自加拿大境内雇主* 且 *超过 1 年* 的全职工作邀请？</p>,
    options: invitationOptions,
}

export {
    invitationData,
}
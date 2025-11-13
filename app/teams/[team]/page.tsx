export default async function TeamPage({
    params
}: {
    params: Promise<{ team: string }>
}) {
    const { team } = await params
    return <div>Team: {team}</div>
}
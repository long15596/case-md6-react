import UserTable from "./UserTable";

export default function Admin() {
    return (
        <>
            <div className="row">
                <div className="offset-2 col-10 pt-5">
                    <UserTable></UserTable>
                </div>
            </div>
        </>
    )
}
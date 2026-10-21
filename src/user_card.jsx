
function UserCard({ user }) {
    return (
        <div className="user-card">
            <div className="user-avatar">
                {user.name.charAt(0)}
            </div>

            <h3>{user.name}</h3>

            <p>📧 {user.email}</p>
            <p>📱 {user.phone}</p>
            <p>🌐 {user.website}</p>
            <p>🏢 {user.company.name}</p>
        </div>
    );
}

export default UserCard;

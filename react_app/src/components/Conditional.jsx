

export default function Conditional() {
    const userAccount = "verified";

    return userAccount === "verified" ? (
    <div>
        <span>Welcome!</span>
    </div>
) :
(
 <div>
    <span>Fuck you</span>
 </div>
)
}




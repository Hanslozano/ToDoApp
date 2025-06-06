
import { createElement } from "react";

export function UserFavFood() {
    return createElement("div", null, 
      <section>
        <h1>Favorite Food</h1>
        <ol>
            <li>Banana</li>
            <li>Apple</li>
            <li>Mango</li>
            <li>Grapes</li>
        </ol>
      </section>
    )
}
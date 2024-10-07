import { useEffect, useState } from "react";

export const Cookie = () => {
	const [cookie, setCookie] = useState("");
	const [isAvaliable, setIsAvaliable] = useState(true);

	useEffect(() => {
		const cookie = localStorage.getItem("cookie");
		if (cookie) {
			setIsAvaliable(true);
			setCookie(cookie);
		} else {
			setIsAvaliable(false);
		}
	}, []);

	const handleSetCookie = () => {
		localStorage.setItem("cookie", new Date().toUTCString());
		setCookie(new Date().toUTCString());
	};

	return (
		<>
			{!cookie && !isAvaliable ? (
				<div className="fixed bottom-0 left-0 w-full bg-softGray z-[1000] shadow-md flex items-center px-6 py-40">
					<div>
						Ta strona wykorzystuje pliki cookies (tzw. ciasteczka). Kliknij
						<button onClick={handleSetCookie}>Akceptuj</button>, aby ta
						informacja nie pojawiała się więcej. Kliknij{" "}
						<a href="/polityka-cookies">Polityka Cookies</a>, aby dowiedzieć się
						więcej.
					</div>
				</div>
			) : (
				""
			)}
		</>
	);
};

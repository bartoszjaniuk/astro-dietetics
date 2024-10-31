import { useEffect, useState } from "react";

export const Cookie = () => {
	const [cookie, setCookie] = useState("");
	const [isAvailable, setIsAvaliable] = useState(true);

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
			{!cookie && !isAvailable ? (
				<div className="fixed bottom-0 left-0 w-full bg-softGray z-[1000] shadow-md flex items-center px-6 py-4">
					<div className="w-full flex items-center container responsive-padding mx-auto gap-4">
						<img src="/assets/cookie.svg" alt="Cookie" className="w-12" />
						<div className=" w-fit">
							Ta strona wykorzystuje pliki cookies (tzw. ciasteczka). Kliknij{" "}
							<button
								className="text-primary font-medium"
								onClick={handleSetCookie}
							>
								Akceptuj
							</button>
							, aby ta informacja nie pojawiała się więcej. Kliknij{" "}
							<a className="text-primary underline" href="/polityka-cookies">
								Polityka Cookies
							</a>
							, aby dowiedzieć się więcej.
						</div>
					</div>
				</div>
			) : (
				""
			)}
		</>
	);
};

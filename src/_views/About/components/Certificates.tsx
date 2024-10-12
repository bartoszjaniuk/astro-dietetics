import { CertificatesGallery } from "./CertificatesGallery";

export const Certificates = ({
	certificates,
}: {
	certificates: ImageMetadata[];
}) => {
	return (
		<section className="w-full h-full bg-white">
			<div className="container responsive-padding mx-auto flex flex-col gap-8 pt-8">
				<h1 className="text-primary text-5xl">Kwalifikacje</h1>
				<CertificatesGallery certificates={certificates} />
			</div>
		</section>
	);
};

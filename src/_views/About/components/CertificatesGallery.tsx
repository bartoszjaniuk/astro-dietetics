import { CertificateItem } from "./CertificateItem";

export const CertificatesGallery = ({
	certificates,
}: {
	certificates: ImageMetadata[];
}) => {
	return (
		<section className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 mx-0 my-auto">
			{certificates.map(({ src }, index) => {
				return (
					<CertificateItem
						id={index}
						key={index}
						path={src}
						alt={`Certyfikat ${index + 1}`}
					/>
				);
			})}
		</section>
	);
};

"use client";

import Link from "next/link";
import Image from 'next/image';
import { useState } from "react";
import { StaticImageData } from "next/image";
import { ExternalLink } from "lucide-react";

import {
	Dialog,
	DialogTitle,
	DialogHeader,
	DialogTrigger,
	DialogContent,
	DialogDescription
} from "@/components/ui/dialog";

interface ImageData {
	url: string | StaticImageData;
	link: string;
	projectName: string;
	description?: string;
}

interface JobImagesProps {
	role: string;
	images: ImageData[];
	duration: string;
}

export const JobImages = ({
	role,
	images,
	duration,
}: JobImagesProps) => {
	const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
	
	const handleImageClick = (image: ImageData): void => {
		setSelectedImage(image);
	};

	return (
		<div className="mt-4 flex space-x-2 overflow-x-auto pb-2 w-full">
			{images.map((img, idx) => (
				<Dialog key={idx}>
					<DialogTrigger asChild>
						<Image
							src={img.url}
							width={100}
							height={100}
							alt={`${img.projectName} - ${role}`}
							onClick={() => handleImageClick(img)}
							className="cursor-pointer rounded-md border h-full w-auto shadow-md object-cover"
						/>
					</DialogTrigger>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>{role}</DialogTitle>
							<DialogDescription>
								{duration}
							</DialogDescription>
						</DialogHeader>
						<div className="mt-4 mx-auto space-y-2">
							{selectedImage && (
								<>
									<Image
										width={400}
										height={400}
										src={selectedImage.url}
										alt={`${selectedImage.projectName} - ${role}`}
										className="rounded-md border shadow-md object-cover"
									/>
									{selectedImage.description && (
										<p className="text-sm text-gray-600 mt-2">{selectedImage.description}</p>
									)}
									<Link 
										href={selectedImage.link} 
										target="_blank" 
										className="text-sm flex items-center justify-center text-blue-600 hover:underline mt-2"
									>
										Visit {selectedImage.projectName}
										<ExternalLink className="size-4 ml-2" />
									</Link>
								</>
							)}
						</div>
					</DialogContent>
				</Dialog>
			))}
		</div>
	)
}

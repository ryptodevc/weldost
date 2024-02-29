import React from "react";
import { Button, Card, Image } from "react-bootstrap";

interface NFTCardProps {
    image: string;
    title: string;
    color: string;
    style: string;
}

interface TeamMemberCardProps {
    photo: string;
    name: string;
    role: string;
    description: string;
}

export const NFTCard: React.FunctionComponent<NFTCardProps> = (props) => {
    return(
        <Card className={`NFTCard border-${props.color}-1 border-5 rounded-4 position-relative mb-0 ${props.style}`}>
            <Image src={props.image} width="100%" alt="nft" className="rounded-3"/>
            <Card.Body className="position-absolute bottom-0 w-100 p-3">
                <div className={`bg-${props.color}-2 text-white py-2 px-3 rounded-3`}>
                    <Card.Title className="fs-1 text-center fw-bold mb-2">{props.title}</Card.Title>
                    <Card.Text className="fw-medium mb-0">$5/month</Card.Text>
                    <Card.Text className="fw-medium">5% accumulation</Card.Text>
                </div>
            </Card.Body>
            <div className="text-center w-100 position-absolute button-section">
                <Button className={`px-3 bg-${props.color}-1 rounded-4 fs-4 border-0`}>Buy Now</Button>
            </div>
        </Card>
    )
}

export const TeamMemberCard: React.FunctionComponent<TeamMemberCardProps> = (props) => {
    return(
        <Card className="border-0 TeamMemberCard mb-5">
            <Card.Body>
                <Image src={props.photo} width="100%" alt="photo" className="mb-3"/>
                <Card.Title className="mb-2 text-white fw-bold">{props.name}</Card.Title>
                <Card.Subtitle className="text-secondary-1">{props.role}</Card.Subtitle>
                <Card.Text className="text-white">{props.description}</Card.Text>
            </Card.Body>
        </Card>
    )
}
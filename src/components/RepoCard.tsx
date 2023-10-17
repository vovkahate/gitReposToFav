import { useActions } from '../hooks/actions';
import { useAppSelector } from '../hooks/redux';
import { IRepo } from '../models/models';
import { useState } from 'react';

const RepoCard = ({ repo }: { repo: IRepo }) => {
    const { addFavourite, removeFavourite } = useActions();
    const { favourites } = useAppSelector(state => state.github);

    const [isFavoutite, setIsFavoutite] = useState(
        favourites.includes(repo.html_url)
    );

    const addToFavoutite = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addFavourite(repo.html_url);
        setIsFavoutite(true);
    };

    const removeFromFavoutite = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        removeFavourite(repo.html_url);
        setIsFavoutite(false);
    };

    return (
        <div className='border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all'>
            <a href={repo.html_url} target='_blank'>
                <h2 className='text-lg font-bold'>{repo.full_name}</h2>
                <p className='text-sm'>
                    Forks: <span className='font-bold mr-2'>{repo.forks}</span>
                    Watchers: <span className='font-bold'>{repo.watchers}</span>
                </p>
                <p className='text-sm font-thin'>{repo?.description}</p>

                {!isFavoutite && (
                    <button
                        onClick={addToFavoutite}
                        className='py-2 px-4 bg-yellow-400 mr-2 rounded hover:shadow-md transition-all mr-2'
                    >
                        Add to Favourites
                    </button>
                )}

                {isFavoutite && (
                    <button
                        onClick={removeFromFavoutite}
                        className='py-2 px-4 bg-red-400 rounded hover:shadow-md transition-all mr-2'
                    >
                        Remove
                    </button>
                )}
            </a>
        </div>
    );
};

export default RepoCard;

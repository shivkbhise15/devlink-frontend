function RepoCard({ repo, onSave, saving }) {
    return (
        <div className="bg-gray-800 p-4 mb-4 rounded hover:bg-gray-750 transition">
            <h3 className="font-semibold text-lg">{repo.title}</h3>

            {repo.description && (
                <p className="text-sm text-gray-400 mt-1">
                    {repo.description}
                </p>
            )}

            <div className="flex items-center gap-4 mt-3">
                {/* GitHub link */}
                <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-400 hover:underline focus:outline-none focus:ring"
                >

                    View on GitHub ↗
                </a>

                {/* Save button (only when applicable) */}
                {onSave && (
                    <button
                        disabled={saving}
                        onClick={() => onSave(repo)}
                        className="text-sm text-green-400 disabled:opacity-50"
                    >
                        {saving ? "Saving…" : "Save ⭐"}
                    </button>
                )}
            </div>
        </div>
    );
}

export default RepoCard;

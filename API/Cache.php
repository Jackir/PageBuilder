<?php
/**
 * Created by PhpStorm.
 * User: Ratan
 * Date: 7.5.14
 * Time: 13:35
 */

/**
 *
 * Class for cache serialized data into file system.
 * @author Ratan
 *
 */
class Cache
{
    private $path;

    /**
     *
     * Default constructor of Cache. Get string path to folder where cached data as parameter.
     * @param string $path
     */
    public function __construct($path)
    {
        $this->path = $path;
        if (!is_dir($this->path)) {
            mkdir($path);
        }
    }

    /**
     *
     * Load data from cache.
     * @param int $number
     * @return array data
     */
    public function load($number)
    {
        return unserialize(file_get_contents($this->path . "/" . $number . ".txt"));
    }

    /**
     *
     * Save calculated data into cache.
     * @param int $number
     * @param array $data
     */
    public function save($number, $data)
    {
        file_put_contents($this->path . "/" . $number . ".txt", serialize($data));
    }

    /**
     *
     * Pokud existuje pro tento limit už vypočítaná varianta vrací true.
     * @param int $number jaký je limit pro maximum do kterého počítáme
     * @return boolean
     */
    public function exists($number)
    {
        if (file_exists($this->path . "/" . $number . ".txt")) {
            return true;
        }
        return false;
    }
}

;